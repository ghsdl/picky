export const GET_PROFIL = 'GET_PROFIl';

export const getProfil = () => ({
  type: GET_PROFIL,
});

export const PATCH_PROFIL = 'PATCH_PROFIL';

export const patchProfil = () => ({
  type: PATCH_PROFIL,
});


export const DELETE_PROFIL = 'DELETE_PROFIL';

export const deleteProfil = () => ({
  type: DELETE_PROFIL,
});

export const ACTION_SAVE_PROFIL = 'SAVE_PROFIL';

export const actionSaveProfil = (member, pseudo) => ({
  type: ACTION_SAVE_PROFIL,
  member,
  pseudo,
});