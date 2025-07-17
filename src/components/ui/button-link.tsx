// from https://github.com/shadcn-ui/ui/issues/1979
import { Button } from "./button"

type BaseButtonProps = Parameters<typeof Button>[0]
type ButtonProps = Omit<BaseButtonProps, "asChild"> // don't pass asChild to ButtonLink

interface LinkProps extends ButtonProps {
  href: string
  children: React.ReactNode
}

export function ButtonLink({ href, children, ...props }: LinkProps) {
  return (
    <Button asChild {...props}>
      <a href={href}>{children}</a>
    </Button>
  )
}
