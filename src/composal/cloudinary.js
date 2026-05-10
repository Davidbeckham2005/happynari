export function getCloudinaryUrl(url) {
    if (!url.includes('cloudinary')) return url; // Nếu là link ngoài thì giữ nguyên
    return url.replace('/upload/', '/upload/f_auto,q_auto,w_2000,c_limit/');
} 