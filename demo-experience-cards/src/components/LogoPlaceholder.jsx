export function LogoPlaceholder({ initial, color = '#0E6BA8', size = 'w-12 h-12' }) {
  return (
    <div
      className={`${size} rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0`}
      style={{ backgroundColor: color }}
    >
      {initial}
    </div>
  )
}
