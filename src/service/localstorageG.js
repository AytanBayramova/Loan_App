export const getListGuarantors = () => {
    if (!localStorage["guarantors"]) {
      localStorage["guarantors"] = "[]";
    }
  
    let guarantors = localStorage["guarantors"];
    guarantors = JSON.parse(guarantors);
    return guarantors;
  };
  
  export const addGuarantor = (guarantor) => {
    const guarantors = getListGuarantors();
    guarantors.push(guarantor);
    localStorage["guarantors"] = JSON.stringify(guarantors);
  };
  
  export const removeGuarantor = (id) => {
    let guarantors = getListGuarantors();
    guarantors = guarantors.filter((guarantor) => guarantor.id !== id);
    localStorage["guarantors"] = JSON.stringify(guarantors);
  };
  
  export const getGuarantorById = (id) => {
    const guarantors = getListGuarantors();
    const guarantor = guarantors.find((guarantor) => guarantor.id === id);
    return guarantor;
  };
  
  export const editGuarantor = (id, newGuarantor) => {
    let guarantors = getListGuarantors();
    guarantors = guarantors.filter((guarantor) => guarantor.id !== id);
    guarantors.push(newGuarantor);
    localStorage["guarantors"] = JSON.stringify(guarantors);
  };