import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../App';
import { useToast } from '../components/Toast';
import LoadingSpinner from '../components/LoadingSpinner';

export default function LoginPage() {
  const { login, register } = useAuth();
  const toast = useToast();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!username.trim()) next.username = 'Username is required';
    if (!password.trim()) next.password = 'Password is required';
    else if (password.length < 4) next.password = 'Password must be at least 4 characters';
    if (isSignUp && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Enter a valid email address';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    try {
      if (isSignUp) {
        register(username, email, password);
        toast.success('Account created', 'Welcome to BTC Trade Pro!');
      } else {
        login(username, password);
        toast.success('Signed in', `Welcome back, ${username}!`);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Please check your credentials';
      toast.error('Authentication failed', msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <style>{`
        .auth-shell {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
          z-index: 1;
        }
        .auth-card-wrap {
          position: relative;
          width: 100%;
          max-width: 448px;
          margin: 0 auto;
        }
        .auth-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(14px);
          transition: background-color 0.3s ease;
        }
        .auth-toggle-panel {
          margin-top: 24px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-primary);
          backdrop-filter: blur(12px);
        }
        .auth-stats {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .auth-stat {
          text-align: center;
        }
        .auth-input {
          width: 100%;
          padding: 12px 16px;
          background: var(--bg-input);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 14px;
          transition: all 0.25s ease;
        }
        .auth-input::placeholder {
          color: var(--text-muted);
        }
        .auth-input:focus {
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 3px rgba(247, 147, 26, 0.12);
        }
        .auth-input.has-error {
          border-color: var(--accent-red);
          box-shadow: 0 0 0 3px rgba(246, 70, 93, 0.12);
        }
        .field-error {
          font-size: 12px;
          color: var(--accent-red);
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .auth-submit {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-weight: 700;
          font-size: 15px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(247, 147, 26, 0.3);
        }
        .auth-submit:hover:not(:disabled) {
          box-shadow: 0 6px 28px rgba(247, 147, 26, 0.45);
          transform: translateY(-1px);
        }
        .auth-submit:active:not(:disabled) {
          transform: translateY(0) scale(0.98);
        }
        .auth-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        @media (max-width: 640px) {
          .auth-shell {
            gap: 18px;
            max-width: 760px;
          }
          .auth-card-wrap {
            max-width: 520px;
          }
          .auth-card {
            padding: 28px 24px;
            border-radius: 22px;
          }
          .auth-stats {
            gap: 18px;
            padding: 0 6px;
          }
          .auth-stat p:first-child {
            font-size: 12px;
          }
          .auth-stat p:last-child {
            font-size: 16px;
          }
        }
        @media (max-width: 420px) {
          .auth-card {
            padding: 24px 18px;
          }
          .auth-stats {
            gap: 14px;
          }
        }
      `}</style>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-btc-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-btc-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating BTC Icons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-btc-gold/10 text-8xl font-bold animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          >
            &#x20bf;
          </div>
        ))}
      </div>

      <div className="auth-shell">
        <div className="auth-card-wrap">
          <div className="auth-card">
          {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Back to home
              </Link>
              <div className="w-20 h-20 bg-gradient-to-br from-btc-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow">
                <span className="text-4xl font-bold text-btc-dark">&#x20bf;</span>
              </div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>BTC Trade</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Professional Cryptocurrency Trading</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>User Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setErrors((p) => ({ ...p, username: undefined })); }}
                  placeholder="Enter your user name"
                  className={`auth-input ${errors.username ? 'has-error' : ''}`}
                />
                {errors.username && <p className="field-error">{errors.username}</p>}
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Email (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                    placeholder="Enter your email"
                    className={`auth-input ${errors.email ? 'has-error' : ''}`}
                  />
                  {errors.email && <p className="field-error">{errors.email}</p>}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                    placeholder="Enter your password"
                    className={`auth-input ${errors.password ? 'has-error' : ''}`}
                    style={{ paddingRight: 48 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="field-error">{errors.password}</p>}
              </div>

              <button type="submit" className="auth-submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <LoadingSpinner size={18} color="#111" />
                    {isSignUp ? 'Creating Account...' : 'Signing In...'}
                  </>
                ) : (
                  isSignUp ? 'Create Account' : 'Sign In'
                )}
              </button>
            </form>

            {/* Toggle */}
            <div className="auth-toggle-panel">
              <p className="text-center" style={{ color: 'var(--text-secondary)' }}>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => { setIsSignUp(!isSignUp); setErrors({}); }}
                  className="font-medium hover:underline"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            {/* Demo hint */}
            <div className="mt-4 p-3 rounded-lg" style={{ background: 'var(--bg-input)', border: '1px solid var(--border-primary)' }}>
              <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                {isSignUp ? 'New accounts start as unverified and must complete profile verification before trading.' : 'Demo: Click Sign In with pre-filled credentials'}
              </p>
            </div>
          </div>
        </div>

        <div className="auth-stats">
          <div className="auth-stat">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>24h Volume</p>
            <p className="font-bold" style={{ color: 'var(--text-primary)' }}>$2.4B</p>
          </div>
          <div className="auth-stat">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Active Traders</p>
            <p className="font-bold" style={{ color: 'var(--text-primary)' }}>45,892</p>
          </div>
          <div className="auth-stat">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Win Rate</p>
            <p className="font-bold" style={{ color: 'var(--accent-green)' }}>78%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
