export const CHANGE_PSEUDO_INPUT = 'CHANGE_PSEUDO_INPUT';
export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const CHANGE_CONFIRMATION_PASSWORD_INPUT = 'CHANGE_CONFIRMATION_PASSWORD_INPUT';

export const changePseudoInput = (newValue) => (
  {
    type: CHANGE_PSEUDO_INPUT,
    newValue,
  }
);

export const changeEmailInput = (newValue) => (
  {
    type: CHANGE_EMAIL_INPUT,
    newValue,
  }
);

export const changePasswordInput = (newValue) => (
  {
    type: CHANGE_PASSWORD_INPUT,
    newValue,
  }
);

export const changeConfirmationPasswordInput = (newValue) => (
  {
    type: CHANGE_CONFIRMATION_PASSWORD_INPUT,
    newValue,
  }
);
