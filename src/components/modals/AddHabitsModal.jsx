import { useState } from "react";

function AddHabitsModal({ setModal, addHabits, editingHabits, deleteHabits, editHabits }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') return;
    addHabits(inputValue);
    setModal(false);
  };

  const handleEdit = () => {
    if (inputValue.trim() === '') return;
    editHabits(editingHabits.id, inputValue);
    setModal(false);
  };

  const handleDelete = () => {
    deleteHabits(editingHabits.id);
    setModal(false);
  };

  return (
    <div onClick={() => setModal(false)} className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl p-6 w-11/12 max-w-sm flex flex-col gap-4">
        <label>
          <h3>{editingHabits ? "Edit habit..." : "Add habits..."}</h3>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-[100%] border-2 border-gray-300 p-1 rounded-xl mb-2" type="text" />
        </label>

        {editingHabits ? (
          <div className="flex justify-between w-full">
            <button onClick={handleDelete} className="py-1 px-7 text-white bg-toqbg transition-colors rounded-2xl">Delete</button>
            <button onClick={handleEdit} className="py-1 px-9 text-white bg-slate-700 hover:bg-slate-600 transition-colors rounded-2xl">Save</button>
          </div>
        ) : (
          <button onClick={handleAdd} className="p-1 text-white bg-slate-700 hover:bg-slate-600 transition-colors rounded-xl w-[40%] self-end">Add</button>
        )}
      </div>
    </div>
  );
}

export default AddHabitsModal;