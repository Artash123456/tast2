import EncryptionService from './encryption_service';

export const loadStore = (stateName: string, initial: any) => {
  const secure_state = localStorage.getItem('state') || '';
  const decrypted_state = EncryptionService.decrypt(secure_state);
  if (decrypted_state) {
    const state = JSON.parse(decrypted_state);
    if (state) return state[stateName as keyof unknown];
  }
  return initial;
};
