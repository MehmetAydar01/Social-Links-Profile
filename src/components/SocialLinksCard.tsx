import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import profilPhoto from '@/assets/images/profilphotoguncel.jpg';
import SocialLinkButton from './SocialLinkButton';

type SocialLink = {
  id: number;
  href: string;
  label: string;
};

const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: 'https://github.com/MehmetAydar01',
    label: 'gitHub',
  },
  {
    id: 2,
    href: 'https://www.frontendmentor.io/home',
    label: 'frontend mentor',
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/mehmetaydar/',
    label: 'linkedin',
  },
  {
    id: 4,
    href: '#',
    label: 'twitter',
  },
  {
    id: 5,
    href: '#',
    label: 'instagram',
  },
];

function SocialLinksCard() {
  return (
    <Card className='w-full max-w-sm font-inter bg-grey-2 border-none text-white mx-1'>
      <CardHeader className='items-center pt-10 gap-y-4'>
        <img
          src={profilPhoto}
          alt='profil photo'
          className='rounded-full w-20 h-20'
        />
        <div className='flex items-center flex-col gap-y-1 text-center'>
          <CardTitle className='text-xl capitalize tracking-normal'>
            Mehmet Aydar
          </CardTitle>
          <CardDescription className='text-green capitalize opacity-90'>
            Adana & Istanbul, Turkey
          </CardDescription>
        </div>
        <CardDescription className='text-xs text-white opacity-70 w-full text-center'>
          "Front-end developer and a human"
        </CardDescription>
      </CardHeader>
      <CardContent className='flex items-center justify-center flex-col gap-y-4 pb-10'>
        {socialLinks.map((item) => {
          return (
            <SocialLinkButton
              key={item.id}
              href={item.href}
              label={item.label}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}

export default SocialLinksCard;
