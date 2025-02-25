function showAlert(platform){
    switch(platform) {
        case 'WhatsApp':
            alert('you clicked on WhatsApp! Redurecting to WhatsApp...');
            break;
        case 'Instagram':
            alert('You clicked on Instagram! Redurecting to Instagram...') ;
            break;
        case 'Email'  :
            alert('you clicked on email! Redurecting to Email...');
            break;
            default:
                alert('Unknown platform');
    }
}