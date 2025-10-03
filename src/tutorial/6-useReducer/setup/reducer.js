export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payLoad];
    return {
      ...state,
      people: newPeople,
      isModalOPen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOPen: true,
      modalContent: "add people",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOPen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payLoad
    );
    return { ...state, people: newPeople };
  }
  throw new Error("no matching action type");
};
