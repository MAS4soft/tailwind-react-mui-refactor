import { Facebook, Instagram, YouTube } from '@mui/icons-material'

const Footer = () => {
    return (
        <footer className='flex justify-between p-4 border-b-2 border-b-gray-800 py-4'>
            <div>
                <span> Copyright © 2024 Aramedia Construction Company </span>
            </div>

            <ul className='flex items-center gap-4 text-2xl'>
                <li className='md:hidden'>
                    <Instagram />{' '}
                </li>
                <li className='md:hidden'>
                    <Facebook />{' '}
                </li>
                <li className='md:hidden'>
                    <YouTube />{' '}
                </li>
                <li className='hidden md:block md:text-sm'>INSTGRAM</li>
                <li className='hidden md:block md:text-sm'>FACEBOOK</li>
                <li className='hidden md:block md:text-sm'>YOUTUBE</li>
            </ul>
        </footer>
    )
}

export default Footer
