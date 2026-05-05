import { useMemo, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowDownCircle, ArrowUpCircle, Bitcoin, Check, Copy, Lock, Wallet, X } from 'lucide-react';
import { useAuth, useApp } from '../App';
import type { Transaction } from '../types';
import { DEPOSIT_WALLET, formatNumber } from '../utils/mockData';

export default function FinancePage() {
  const { user, updateUser } = useAuth();
  const { btcPrice, transactions, addTransaction, walletAddress } = useApp();

  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw' | 'stake'>('deposit');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');
  const [depositSubmitted, setDepositSubmitted] = useState(false);
  const [withdrawSubmitted, setWithdrawSubmitted] = useState(false);
  const [stakeSubmitted, setStakeSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  // Show deposit modal instead of inline panel
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [pendingDeposit, setPendingDeposit] = useState<{ btcAmount: number; usdAmount: number } | null>(null);
  const [depositChecking, setDepositChecking] = useState(false);

  // Use the admin-configured wallet address from context, fall back to mockData constant
  const currentWallet = walletAddress || DEPOSIT_WALLET;

  const userTransactions = useMemo(
    () => transactions.filter((entry) => entry.userEmail === user?.email).slice(0, 8),
    [transactions, user?.email],
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentWallet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const handlePrepareDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) return;
    const btcAmt = parseFloat(depositAmount);
    setPendingDeposit({ btcAmount: btcAmt, usdAmount: btcAmt * btcPrice });
    setShowDepositModal(true);
  };

  const handleFinishDeposit = () => {
    if (!user || !pendingDeposit) return;
    setDepositChecking(true);
    // Simulate system checking
    setTimeout(() => {
      const nextTransaction: Transaction = {
        id: `tx-${Date.now()}`,
        type: 'deposit',
        amount: pendingDeposit.usdAmount,
        btcAmount: pendingDeposit.btcAmount,
        walletAddress: currentWallet,
        userEmail: user.email,
        userName: user.name,
        status: 'pending',
        timestamp: new Date().toISOString(),
      };
      addTransaction(nextTransaction);
      setDepositChecking(false);
      setShowDepositModal(false);
      setPendingDeposit(null);
      setDepositAmount('');
      setDepositSubmitted(true);
      window.setTimeout(() => setDepositSubmitted(false), 4000);
    }, 2000);
  };

  const handleCancelDeposit = () => {
    setShowDepositModal(false);
    setPendingDeposit(null);
  };

  const submitWithdraw = () => {
    if (!user || !withdrawAmount) return;
    const amount = parseFloat(withdrawAmount);
    if (amount > (user.usdBalance || 0)) {
      alert('Insufficient USD balance');
      return;
    }
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'withdraw',
      amount,
      btcAmount: amount / btcPrice,
      withdrawAddress,
      userEmail: user.email,
      userName: user.name,
      status: 'pending',
      timestamp: new Date().toISOString(),
    });
    setWithdrawSubmitted(true);
    setWithdrawAmount('');
    setWithdrawAddress('');
  };

  const submitStake = () => {
    if (!user || !stakeAmount) return;
    const amount = parseFloat(stakeAmount);
    if (amount > user.btcBalance) {
      alert('Insufficient BTC balance');
      return;
    }
    updateUser({
      btcBalance: user.btcBalance - amount,
      stakeAmount: (user.stakeAmount || 0) + amount,
    });
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'stake',
      amount: amount * btcPrice,
      btcAmount: amount,
      userEmail: user.email,
      userName: user.name,
      status: 'completed',
      timestamp: new Date().toISOString(),
    });
    setStakeSubmitted(true);
    setStakeAmount('');
  };

  return (
    <>
      {/* Deposit Modal */}
      {showDepositModal && pendingDeposit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="deposit-modal">
            <style>{`
              .deposit-modal {
                background: linear-gradient(180deg, #141b26, #0c1018);
                border: 1px solid rgba(247,147,26,0.22);
                border-radius: 28px;
                box-shadow: 0 40px 120px rgba(0,0,0,0.5);
                padding: 36px;
                max-width: 420px;
                width: 90%;
                display: grid;
                gap: 22px;
                animation: modalIn 0.25s ease;
              }
              @keyframes modalIn {
                from { opacity: 0; transform: scale(0.92) translateY(12px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
              .dm-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
              }
              .dm-head h2 {
                font-size: 22px;
                font-weight: 800;
                color: #f3f6fb;
              }
              .dm-close {
                width: 36px; height: 36px;
                border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.08);
                background: rgba(255,255,255,0.04);
                color: #8fa2ba;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer;
                transition: all 0.15s;
              }
              .dm-close:hover { background: rgba(255,255,255,0.08); color: #eef3fb; }
              .dm-amount-box {
                padding: 20px;
                border-radius: 20px;
                background: rgba(247,147,26,0.08);
                border: 1px solid rgba(247,147,26,0.2);
                text-align: center;
              }
              .dm-btc-val { font-size: 32px; font-weight: 800; color: #f6b353; font-family: 'JetBrains Mono', monospace; }
              .dm-usd-val { font-size: 14px; color: #8fa2ba; margin-top: 6px; }
              .dm-network {
                display: inline-flex; align-items: center; gap: 8px;
                padding: 8px 14px; border-radius: 999px;
                background: rgba(247,147,26,0.14); color: #f6b353;
                font-size: 12px; font-weight: 700; text-transform: uppercase;
              }
              .dm-qr {
                display: flex; justify-content: center; padding: 16px;
                background: #fff; border-radius: 20px;
              }
              .dm-address-box {
                display: flex; align-items: center; gap: 10px;
                padding: 14px; border-radius: 16px;
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.06);
              }
              .dm-address-box code {
                flex: 1; color: #eef3fb; font-size: 12px;
                word-break: break-all; font-family: monospace;
              }
              .dm-copy-btn {
                width: 38px; height: 38px; border-radius: 10px;
                border: none; background: rgba(255,255,255,0.06);
                color: #eef3fb; display: flex; align-items: center;
                justify-content: center; cursor: pointer; flex-shrink: 0;
              }
              .dm-hint {
                font-size: 12px; color: #8fa2ba; text-align: center;
                line-height: 1.6;
              }
              .dm-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
              .dm-btn {
                min-height: 50px; border: none; border-radius: 16px;
                font-size: 14px; font-weight: 800;
                cursor: pointer; transition: opacity 0.15s;
              }
              .dm-btn:disabled { opacity: 0.5; cursor: not-allowed; }
              .dm-finish {
                background: linear-gradient(135deg, #0ecb81, #62f3bd);
                color: #061208;
              }
              .dm-cancel {
                background: rgba(246,70,93,0.16);
                border: 1px solid rgba(246,70,93,0.2);
                color: #f6465d;
              }
              .dm-checking {
                display: flex; flex-direction: column; align-items: center;
                gap: 14px; padding: 20px; text-align: center;
              }
              .dm-checking .spinner {
                width: 48px; height: 48px; border: 4px solid rgba(255,255,255,0.1);
                border-top-color: #f6b353; border-radius: 50%;
                animation: spin 0.8s linear infinite;
              }
              @keyframes spin { to { transform: rotate(360deg); } }
              .dm-checking p { color: #8fa2ba; font-size: 14px; line-height: 1.6; }
            `}</style>

            <div className="dm-head">
              <h2>Deposit BTC</h2>
              <button className="dm-close" onClick={handleCancelDeposit}>
                <X size={16} />
              </button>
            </div>

            {depositChecking ? (
              <div className="dm-checking">
                <div className="spinner" />
                <p>System is checking your deposit.<br />This may take a few seconds...</p>
              </div>
            ) : (
              <>
                <div className="dm-amount-box">
                  <div className="dm-btc-val">{pendingDeposit.btcAmount.toFixed(8)} BTC</div>
                  <div className="dm-usd-val">≈ ${formatNumber(pendingDeposit.usdAmount)} USDT</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div className="dm-network">
                    <Bitcoin size={13} />
                    BTC Network Only
                  </div>
                </div>

                <div className="dm-qr">
                  <QRCodeSVG value={currentWallet} size={180} bgColor="#ffffff" fgColor="#000000" />
                </div>

                <div className="dm-address-box">
                  <code>{currentWallet}</code>
                  <button className="dm-copy-btn" onClick={handleCopy}>
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <p className="dm-hint">
                  Send exactly <strong style={{ color: '#f6b353' }}>{pendingDeposit.btcAmount.toFixed(8)} BTC</strong> to the address above.
                  Your balance will update after admin verification.
                </p>

                <div className="dm-actions">
                  <button className="dm-btn dm-finish" onClick={handleFinishDeposit}>
                    Finish Deposit
                  </button>
                  <button className="dm-btn dm-cancel" onClick={handleCancelDeposit}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="finance-shell">
        <style>{`
          .finance-shell {
            max-width: 1220px;
            margin: 0 auto;
            color: #eef3fb;
            display: grid;
            gap: 22px;
          }
          .card {
            background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 28px;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
          }
          .page-head { padding: 26px; }
          .page-head h1 {
            font-size: 30px; font-weight: 800;
            letter-spacing: -0.03em; margin-bottom: 8px;
          }
          .page-head p { color: #90a0b6; }
          .balance-grid { display: grid; gap: 18px; grid-template-columns: repeat(3, 1fr); }
          .balance-card { padding: 22px; }
          .balance-icon {
            width: 48px; height: 48px; border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 14px;
            background: rgba(247, 147, 26, 0.12); color: #f7931a;
          }
          .balance-card h3 {
            font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
            color: #8fa2ba; margin-bottom: 8px;
          }
          .balance-card strong {
            font-size: 30px; font-family: 'JetBrains Mono', monospace; font-weight: 800;
          }
          .balance-card p { color: #90a0b6; margin-top: 8px; font-size: 13px; }
          .content-grid { display: grid; gap: 18px; grid-template-columns: minmax(0, 1fr) 380px; }
          .wallet-main { padding: 24px; }
          .tab-row { display: flex; gap: 10px; margin-bottom: 22px; flex-wrap: wrap; }
          .tab-btn {
            min-height: 42px; padding: 0 16px; border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.07);
            background: rgba(255, 255, 255, 0.03); color: #8fa2ba; font-weight: 700;
          }
          .tab-btn.active {
            background: rgba(247, 147, 26, 0.16);
            border-color: rgba(247, 147, 26, 0.36); color: #f6b353;
          }
          .flow-card {
            padding: 22px; border-radius: 24px; background: rgba(255, 255, 255, 0.03);
          }
          .flow-card h2 { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
          .flow-card p { color: #90a0b6; line-height: 1.7; }
          .field { margin-top: 18px; }
          .field label {
            display: block; font-size: 12px; text-transform: uppercase;
            letter-spacing: 0.08em; color: #8fa2ba; margin-bottom: 8px;
          }
          .amount-input {
            width: 100%; min-height: 56px; padding: 0 18px; border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.03); color: #eef3fb;
            font-size: 24px; font-weight: 800; font-family: 'JetBrains Mono', monospace;
          }
          .amount-input:focus { outline: none; border-color: rgba(247,147,26,0.45); }
          .amount-note { color: #90a0b6; font-size: 13px; margin-top: 8px; }
          .cta {
            margin-top: 18px; width: 100%; min-height: 52px; border: none;
            border-radius: 16px; background: linear-gradient(135deg, #f7931a, #ffb347);
            color: #111; font-weight: 800; font-size: 15px; cursor: pointer;
          }
          .status-banner {
            margin-top: 16px; padding: 14px 16px; border-radius: 16px;
            background: rgba(52, 120, 246, 0.16); color: #cde0ff; line-height: 1.6;
          }
          .history-card { padding: 24px; }
          .history-card h3 { font-size: 18px; font-weight: 800; margin-bottom: 18px; }
          .tx-list { display: grid; gap: 12px; }
          .tx-item {
            display: grid; grid-template-columns: auto minmax(0, 1fr) auto auto;
            gap: 12px; align-items: center; padding: 14px; border-radius: 16px;
            background: rgba(255, 255, 255, 0.03);
          }
          .tx-icon {
            width: 42px; height: 42px; border-radius: 14px;
            display: flex; align-items: center; justify-content: center;
          }
          .tx-icon.deposit { background: rgba(14, 203, 129, 0.14); color: #0ecb81; }
          .tx-icon.withdraw { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
          .tx-icon.stake { background: rgba(247, 147, 26, 0.14); color: #f7931a; }
          .tx-meta strong { display: block; text-transform: capitalize; }
          .tx-meta span, .tx-status { color: #8fa2ba; font-size: 12px; }
          .tx-amount { font-family: 'JetBrains Mono', monospace; font-weight: 700; }
          .tx-status.completed { color: #0ecb81; }
          .tx-status.pending { color: #f6b353; }
          .tx-status.rejected { color: #f6465d; }
          .tx-status-label { text-transform: capitalize; }
          @media (max-width: 1080px) {
            .balance-grid, .content-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 760px) {
            .page-head, .wallet-main, .history-card, .balance-card { padding: 18px; }
            .tx-item { grid-template-columns: auto 1fr; }
          }
        `}</style>

        <section className="card page-head">
          <h1>Finance Center</h1>
          <p>Deposit, withdraw, and manage your demo BTC wallet.</p>
        </section>

        <section className="balance-grid">
          <div className="card balance-card">
            <div className="balance-icon"><Wallet size={24} /></div>
            <h3>USD Balance</h3>
            <strong>${formatNumber(user?.usdBalance || 0)}</strong>
            <p>Available for trading and withdrawals.</p>
          </div>
          <div className="card balance-card">
            <div className="balance-icon"><Bitcoin size={24} /></div>
            <h3>BTC Holdings</h3>
            <strong>{(user?.btcBalance || 0).toFixed(6)} BTC</strong>
            <p>Live value: ${((user?.btcBalance || 0) * btcPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          </div>
          <div className="card balance-card">
            <div className="balance-icon"><Lock size={24} /></div>
            <h3>Staked BTC</h3>
            <strong>{(user?.stakeAmount || 0).toFixed(6)} BTC</strong>
            <p>Passive rewards in demo mode.</p>
          </div>
        </section>

        <section className="content-grid">
          <div className="card wallet-main">
            <div className="tab-row">
              <button className={`tab-btn ${activeTab === 'deposit' ? 'active' : ''}`} onClick={() => setActiveTab('deposit')}>Deposit</button>
              <button className={`tab-btn ${activeTab === 'withdraw' ? 'active' : ''}`} onClick={() => setActiveTab('withdraw')}>Withdraw</button>
              <button className={`tab-btn ${activeTab === 'stake' ? 'active' : ''}`} onClick={() => setActiveTab('stake')}>Stake</button>
            </div>

            {activeTab === 'deposit' && (
              <div className="flow-card">
                <h2>Deposit BTC</h2>
                <p>Enter the BTC amount you want to deposit. A new page will show the QR code and wallet address. Click Finish Deposit to submit for verification.</p>
                <div className="field">
                  <label>Deposit Amount (BTC)</label>
                  <input
                    className="amount-input"
                    value={depositAmount}
                    onChange={(event) => setDepositAmount(event.target.value)}
                    type="number"
                    placeholder="0.01000000"
                  />
                  <div className="amount-note">
                    USDT credit after verification: {depositAmount ? `$${formatNumber(parseFloat(depositAmount || '0') * btcPrice)}` : '$0.00'}
                  </div>
                </div>
                <button className="cta" onClick={handlePrepareDeposit}>Prepare Deposit</button>
                {depositSubmitted && (
                  <div className="status-banner">
                    Deposit submitted and pending. Once System Admin verifies it, your balance will be credited.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'withdraw' && (
              <div className="flow-card">
                <h2>Withdraw USD</h2>
                <p>Submit a withdrawal request. The amount is deducted only after admin approval.</p>
                <div className="field">
                  <label>Withdrawal Amount (USD)</label>
                  <input className="amount-input" value={withdrawAmount} onChange={(event) => setWithdrawAmount(event.target.value)} type="number" placeholder="500" />
                  <div className="amount-note">Available: ${formatNumber(user?.usdBalance || 0)}</div>
                </div>
                <div className="field">
                  <label>BTC Wallet Address</label>
                  <input className="amount-input" style={{ fontSize: '16px', fontWeight: 600 }} value={withdrawAddress} onChange={(event) => setWithdrawAddress(event.target.value)} type="text" placeholder="Paste your BTC wallet address" />
                </div>
                <button className="cta" onClick={submitWithdraw}>Submit Withdrawal</button>
                {withdrawSubmitted && (
                  <div className="status-banner">Withdrawal request submitted. Admin approval required.</div>
                )}
              </div>
            )}

            {activeTab === 'stake' && (
              <div className="flow-card">
                <h2>Stake BTC</h2>
                <p>Move BTC into the staking pool and earn passive rewards.</p>
                <div className="field">
                  <label>Stake Amount (BTC)</label>
                  <input className="amount-input" value={stakeAmount} onChange={(event) => setStakeAmount(event.target.value)} type="number" placeholder="0.050000" />
                  <div className="amount-note">Available BTC: {(user?.btcBalance || 0).toFixed(6)}</div>
                </div>
                <button className="cta" onClick={submitStake}>Start Staking</button>
                {stakeSubmitted && (
                  <div className="status-banner">BTC moved to staking successfully.</div>
                )}
              </div>
            )}
          </div>

          <aside className="card history-card">
            <h3>Recent Activity</h3>
            <div className="tx-list">
              {userTransactions.map((tx) => (
                <div key={tx.id} className="tx-item">
                  <div className={`tx-icon ${tx.type}`}>
                    {tx.type === 'deposit' ? <ArrowDownCircle size={20} /> : tx.type === 'withdraw' ? <ArrowUpCircle size={20} /> : <Lock size={20} />}
                  </div>
                  <div className="tx-meta">
                    <strong>{tx.type}</strong>
                    <span>{new Date(tx.timestamp).toLocaleString()}</span>
                  </div>
                  <div className="tx-amount">${formatNumber(tx.amount)}</div>
                  <div className={`tx-status ${tx.status}`}>
                    <span className="tx-status-label">{tx.status === 'completed' ? 'verified' : tx.status}</span>
                    {tx.reviewedBy ? ` · ${tx.reviewedBy}` : ''}
                  </div>
                </div>
              ))}
              {userTransactions.length === 0 && <div className="amount-note">No transactions yet.</div>}
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
