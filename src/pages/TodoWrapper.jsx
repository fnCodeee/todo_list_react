import React, { useEffect, useState } from "react";
import { TodoItem } from "../components/Fragments/TodoItem";
import { FormInput } from "../components/Fragments/FormInput";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { CategoryTodo } from "../components/Fragments/CategoryTodo";
import { FormEdit } from "../components/Fragments/FormEdit";
import { ModalConfirm } from "../components/Elements/ModalConfirm";

export const TodoWrapper = () => {
 const [categories, setCategories] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [todos, setTodos] = useState([]);
 const [isOpenSidebar, setIsOpenSidebar] = useState(false);
 const [toggleSelectCSS, setToggleSelectCSS] = useState("");

 useEffect(() => {
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Fetch all categories from Firestore collection "todoGroups"
   * @returns {Promise<void>}
   */
  /******  1158246d-08fa-4d8d-bcf5-37a3608ccc45  *******/
  const fetchCategories = async () => {
   /**
    * @function getDocs() => untuk semua collections
    */
   const querySnapshot = await getDocs(collection(db, "todoGroups"));
   const categoriesData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
   }));
   setCategories(categoriesData);

   // YOU ARE GREAT ==> Default, ambil data category
   if (categories.length === 0) {
    setSelectedCategory(categoriesData[0].id);
   }
  };

  fetchCategories();
 }, []);

 useEffect(() => {
  if (!selectedCategory) return;
  const unsubscribe = onSnapshot(collection(db, "todoGroups", selectedCategory, "todos"), (snapshot) => {
   setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
  return () => unsubscribe();
 }, [selectedCategory]);

 const addCategory = async (value) => {
  if (!value.trim()) return;
  if (!value) alert("Please Input Your Todos Categories!");
  const docRef = await addDoc(collection(db, "todoGroups"), {
   name: value,
   isEdited: false,
  });
  setCategories([
   ...categories,
   {
    id: docRef.id,
    name: value,
    isEdited: false,
   },
  ]);
 };

 const handleDelete = async (id) => {
  await deleteDoc(doc(db, "todoGroups", id));
  setCategories(categories.filter((cat) => cat.id !== id));
 };

 const toggleEdit = async (id, currentValue) => {
  await updateDoc(doc(db, "todoGroups", id), {
   isEdited: !currentValue,
  });

  setCategories((prevTask) => prevTask.map((task) => (task.id === id ? { ...task, isEdited: !currentValue } : task)));
 };

 const handleEdit = async (id, value) => {
  try {
   const useRef = doc(db, "todoGroups", id);
   await updateDoc(useRef, {
    name: value.name,
   });

   //Perbaru perubahan di UI, jadi gak kosong
   setCategories((prev) => prev.map((item) => (item.id === id ? { ...item, name: value.name } : item)));
  } catch (error) {
   console.error("ERROR 401:", error);
  }
 };

 // Tambah Tugas KeSubCollection
 const addTask = async (value) => {
  await addDoc(collection(db, "todoGroups", selectedCategory, "todos"), {
   todoTask: value,
   isEdited: false,
   isCompleted: false,
  });
 };

 const deleteTask = async (id) => {
  await deleteDoc(doc(db, "todoGroups", selectedCategory, "todos", id));
  setTodos(todos.filter((todo) => todo.id !== id));

  setIsModalOpen(false);
 };

 const toggleTaskEdit = async (id, currentValue) => {
  await updateDoc(doc(db, "todoGroups", selectedCategory, "todos", id), {
   isEdited: !currentValue,
  });

  setTodos((prevTask) => prevTask.map((task) => (task.id === id ? { ...task, isEdited: !currentValue } : task)));
 };

 const handleTaskEdit = async (id, value) => {
  try {
   await updateDoc(doc(db, "todoGroups", selectedCategory, "todos", id), {
    task: value.task,
   });

   setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, task: value.task } : todo)));
  } catch (error) {
   console.error("HandleTaskEdit", error);
  }
 };

 const toggleSidebar = () => {
  setIsOpenSidebar(!isOpenSidebar);
 };

 const onCompleted = async (id, currentValue) => {
  await updateDoc(doc(db, "todoGroups", selectedCategory, "todos", id), {
   isCompleted: !currentValue,
  });
 };

 /**
  * @function ModalDeleteConfirm at TodoItems
  */

 const [IsModalOpen, setIsModalOpen] = useState(false);
 const [IdWasDelete, setIdWasDelete] = useState("");

 // console.log(IdWasDelete)

 return (
  <div
   className="w-full grid grid-cols-12 justify-center text-slate-800 sm:min-h-screen 
  
    dark:bg-[#0B192C]
     p-4
  "
  >
   {/* Sidebar Toggle */}
   <button onClick={toggleSidebar} className="sm:hidden w-full backdrop-blur-xs p-4 focus:outline-none fixed">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
   </button>

   <aside
    className={`z-40 fixed sm:p-0 pl-10 inset-y-0 left-0 md:1/4 lg:w-1/3 dark:bg-black/15 light:bg-[#021526] text-white transition-transform transform ${
     isOpenSidebar ? "-translate-x-14" : "-translate-x-full"
    } md:translate-x-0`}
   >
    <div className="w-full flex px-5 pt-11 sm:pt-8 flex-col md:col-span-4">
     <h1 className="text-2xl font-bold mb-4 text-center">To-Dos Category</h1>
     <div className="min-h-screen flex p-5 flex-col">
      <FormInput funcInput={addCategory} label="Category" placeholder={"Make Your Happier Day!"} />
      <CategoryTodo
       selectCategory={setSelectedCategory}
       handleEdit={handleEdit}
       toggleEdit={toggleEdit}
       handleDelete={handleDelete}
       listCategories={categories}
      />
     </div>
    </div>
   </aside>

   <div className="md:col-span-4 col-auto"></div>

   <div className="w-full h-full p-5 flex flex-col pt-14 sm:pt-8 col-span-12 md:col-span-8 text-center sm:px-32">
    <h1 className="w-full text-3xl text-center dark:text-slate-300">Get Things Done!</h1>
    {selectedCategory && (
     <div className="text-lg flex flex-col items-center w-full">
      <p className="text-sm mt-3">Task at {categories.find((c) => c.id === selectedCategory)?.name}</p>
      {todos.map((value) =>
       // console.log(value);

       value.isEdited ? (
        <FormEdit
         className="w-full z-20 text-white/20"
         key={value.id}
         task={value}
         toggleEdit={toggleTaskEdit}
         handleEdit={handleTaskEdit}
         fieldName={"task"}
        />
       ) : (
        <TodoItem
         key={value.id}
         task={value}
         handleDelete={() => {
          setIdWasDelete(value.id);
          setIsModalOpen(true);
         }}
         toggleTaskEdit={toggleTaskEdit}
         onCompleted={onCompleted}

         //  Modal
        />
       )
      )}
      <FormInput className="w-full z-20 dark:text-white/50" funcInput={addTask} placeholder="What you thing now?" />
     </div>
    )}
   </div>

   <ModalConfirm isOpen={IsModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={() => deleteTask(IdWasDelete)} />

   <div
    className={`fixed inset-0 z-10 bg-black opacity-0 transition-opacity ${
     isOpenSidebar ? "opacity-50" : "opacity-0 pointer-events-none"
    } sm:hidden`}
    onClick={toggleSidebar}
   ></div>
  </div>
 );
};
