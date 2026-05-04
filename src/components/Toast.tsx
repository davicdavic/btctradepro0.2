import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Info, X, XCircle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (type: ToastType, title: string, message?: string, duration?: number) => void;
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
  warning: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

const ICON_MAP = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertCircle,
};

const COLOR_MAP = {
  success: { bg: 'rgba(14, 203, 129, 0.12)', border: 'rgba(14, 203, 129, 0.3)', icon: '#0ecb81', bar: '#0ecb81' },
  error: { bg: 'rgba(246, 70, 93, 0.12)', border: 'rgba(246, 70, 93, 0.3)', icon: '#f6465d', bar: '#f6465d' },
  info: { bg: 'rgba(52, 120, 246, 0.12)', border: 'rgba(52, 120, 246, 0.3)', icon: '#3478f6', bar: '#3478f6' },
  warning: { bg: 'rgba(247, 147, 26, 0.12)', border: 'rgba(247, 147, 26, 0.3)', icon: '#f7931a', bar: '#f7931a' },
};

function ToastItem({ toast: t, onClose }: { toast: Toast; onClose: (id: string) => void }) {
  const Icon = ICON_MAP[t.type];
  const colors = COLOR_MAP[t.type];
  const duration = t.duration ?? 4000;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => onClose(t.id), duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [t.id, duration, onClose]);

  return (
    <div className="toast-item" style={{ background: colors.bg, borderColor: colors.border }}>
      <div className="toast-icon" style={{ color: colors.icon }}>
        <Icon size={20} />
      </div>
      <div className="toast-body">
        <p className="toast-title">{t.title}</p>
        {t.message && <p className="toast-message">{t.message}</p>}
      </div>
      <button className="toast-close" onClick={() => onClose(t.id)}>
        <X size={14} />
      </button>
      <div className="toast-progress">
        <div
          className="toast-progress-bar"
          style={{ background: colors.bar, animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((type: ToastType, title: string, message?: string, duration?: number) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((prev) => [...prev.slice(-4), { id, type, title, message, duration }]);
  }, []);

  const contextValue: ToastContextType = {
    toast: addToast,
    success: useCallback((title: string, message?: string) => addToast('success', title, message), [addToast]),
    error: useCallback((title: string, message?: string) => addToast('error', title, message), [addToast]),
    info: useCallback((title: string, message?: string) => addToast('info', title, message), [addToast]),
    warning: useCallback((title: string, message?: string) => addToast('warning', title, message), [addToast]),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="toast-container">
        <style>{`
          .toast-container {
            position: fixed;
            top: 16px;
            right: 16px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 380px;
            width: calc(100% - 32px);
            pointer-events: none;
          }
          .toast-item {
            pointer-events: auto;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 16px;
            border-radius: 14px;
            border: 1px solid;
            backdrop-filter: blur(16px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
            animation: toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
          }
          .toast-icon {
            flex-shrink: 0;
            margin-top: 1px;
          }
          .toast-body {
            flex: 1;
            min-width: 0;
          }
          .toast-title {
            font-size: 14px;
            font-weight: 600;
            color: #f5f7fb;
            line-height: 1.3;
          }
          .toast-message {
            font-size: 12px;
            color: #a0aec0;
            margin-top: 4px;
            line-height: 1.4;
          }
          .toast-close {
            flex-shrink: 0;
            background: none;
            border: none;
            color: #667;
            cursor: pointer;
            padding: 4px;
            border-radius: 6px;
            transition: all 0.15s;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .toast-close:hover {
            color: #ccc;
            background: rgba(255, 255, 255, 0.08);
          }
          .toast-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: rgba(255, 255, 255, 0.05);
          }
          .toast-progress-bar {
            height: 100%;
            width: 100%;
            border-radius: 0 0 14px 14px;
            animation: toastProgress linear forwards;
            transform-origin: left;
          }
          @keyframes toastSlideIn {
            from {
              opacity: 0;
              transform: translateX(30px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
          @keyframes toastProgress {
            from { transform: scaleX(1); }
            to { transform: scaleX(0); }
          }
          @media (max-width: 480px) {
            .toast-container {
              top: 8px;
              right: 8px;
              max-width: 100%;
              width: calc(100% - 16px);
            }
          }
        `}</style>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
