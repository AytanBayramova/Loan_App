export const getListWorks = () => {
    if (!localStorage["works"]) {
      localStorage["works"] = "[]";
    }
  
    let works = localStorage["works"];
    works = JSON.parse(works);
    return works;
  };
  
  export const addWork = (work) => {
    const works = getListWorks();
    works.push(work);
    localStorage["works"] = JSON.stringify(works);
  };
  
  export const removeWork = (id) => {
    let works = getListWorks();
    works = works.filter((work) => work.id !== id);
    localStorage["works"] = JSON.stringify(works);
  };
  
  export const getWorkById = (id) => {
    const works = getListWorks();
    const work = works.find((work) => work.id === id);
    return work;
  };
  
  export const editWork = (id, newWork) => {
    let works = getListWorks();
    works = works.filter((work) => work.id !== id);
    works.push(newWork);
    localStorage["works"] = JSON.stringify(works);
  };