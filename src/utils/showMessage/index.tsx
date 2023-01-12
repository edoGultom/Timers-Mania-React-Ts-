import toast from 'react-hot-toast';
import { IMessage } from '../../models/ITypes';

type Props = IMessage;

export const showMessage = ({ message, status }: Props) => {

    return toast(message, {
        duration: 4000,
        position: 'top-center',
        style: {
            background: status === 'success' ? '#1ABC9C' : '#D9435E'
        },
        className: '',
        // Custom Icon
        icon: '👏',
        // Change colors of success/error/loading icon
        iconTheme: {
            primary: '#000',
            secondary: '#fff',
        },

        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}
