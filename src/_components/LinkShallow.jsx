import Link from 'next/link'

export function LinkShallow({ shallow = true, children, ...props }) {
  return (
    <Link {...props} shallow={shallow}>
      {children}
    </Link>
  )
}
