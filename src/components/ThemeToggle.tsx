import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-14 h-8 rounded-full transition-all duration-500 ease-out-cubic',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-exvia-blue focus-visible:ring-offset-2',
        isDark 
          ? 'bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400'
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Background Stars (visible in dark mode) */}
      <div className={cn(
        'absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500',
        isDark ? 'opacity-100' : 'opacity-0'
      )}>
        <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
        <div className="absolute top-2 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="absolute top-1.5 right-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
        <div className="absolute bottom-1.5 right-5 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Background Clouds (visible in light mode) */}
      <div className={cn(
        'absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500',
        isDark ? 'opacity-0' : 'opacity-100'
      )}>
        <div className="absolute -bottom-1 left-1 w-4 h-2 bg-white/40 rounded-full" />
        <div className="absolute -bottom-0.5 left-3 w-3 h-2 bg-white/30 rounded-full" />
        <div className="absolute -top-0.5 right-2 w-3 h-2 bg-white/30 rounded-full" />
      </div>

      {/* Toggle Circle with Icon */}
      <div
        className={cn(
          'absolute top-0.5 w-7 h-7 rounded-full transition-all duration-500 ease-out-cubic',
          'flex items-center justify-center shadow-lg',
          isDark 
            ? 'translate-x-6 bg-slate-800 shadow-slate-900/50' 
            : 'translate-x-0.5 bg-white shadow-blue-900/20'
        )}
      >
        {/* Sun Icon */}
        <svg
          className={cn(
            'absolute w-4 h-4 transition-all duration-500 ease-out-cubic',
            isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          )}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" fill="#F59E0B" />
          <g className="origin-center">
            <path
              d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
              className={cn(
                'transition-transform duration-700',
                isTransitioning && !isDark && 'animate-spin-slow'
              )}
            />
          </g>
        </svg>

        {/* Moon Icon */}
        <svg
          className={cn(
            'absolute w-4 h-4 transition-all duration-500 ease-out-cubic',
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
          )}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Moon craters */}
          <circle cx="9" cy="8" r="1" fill="#94A3B8" className="opacity-50" />
          <circle cx="14" cy="14" r="1.5" fill="#94A3B8" className="opacity-40" />
          <circle cx="11" cy="16" r="0.8" fill="#94A3B8" className="opacity-30" />
        </svg>
      </div>

      {/* Glow Effect */}
      <div
        className={cn(
          'absolute inset-0 rounded-full transition-opacity duration-500 blur-sm -z-10',
          isDark 
            ? 'opacity-50 bg-gradient-to-r from-indigo-500 to-purple-500' 
            : 'opacity-30 bg-gradient-to-r from-yellow-400 to-orange-400'
        )}
      />
    </button>
  );
}
