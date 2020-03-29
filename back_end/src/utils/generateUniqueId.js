import crypto from 'crypto';

const generateUniqueId = () => {
  return crypto.randomBytes(4).toString('HEX');
};

export default generateUniqueId;
