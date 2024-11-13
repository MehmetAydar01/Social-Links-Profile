import { Button } from '@/components/ui/button';

type SocialLinkButtonProps = {
  href: string;
  label: string;
};

function SocialLinkButton({ href, label }: SocialLinkButtonProps) {
  return (
    <Button
      asChild
      size='lg'
      variant='outline'
      className='w-full bg-grey-1 border-none hover:bg-green hover:text-black capitalize text-sm font-semibold rounded-lg'
    >
      <a href={href} target='_blank'>
        {label}
      </a>
    </Button>
  );
}
export default SocialLinkButton;
