import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export default function Task() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Fetch kategori dari Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todoGroups"), (snapshot) => {
      setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // Fetch todos dari subcollection
  useEffect(() => {
    if (!selectedCategory) return;
    const unsubscribe = onSnapshot(
      collection(db, "todoGroups", selectedCategory, "todos"),
      (snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );
    return () => unsubscribe();
  }, [selectedCategory]);

  // Tambah kategori baru
  const addCategory = async () => {
    if (!newCategory.trim()) return;
    const docRef = await addDoc(collection(db, "todoGroups"), {
      name: newCategory,
    });
    setNewCategory("");
  };

  // Hapus kategori
  const deleteCategory = async (id) => {
    await deleteDoc(doc(db, "todoGroups", id));
    if (selectedCategory === id) setSelectedCategory(null);
  };

  // Tambah tugas ke subcollection
  const addTodo = async () => {
    if (!selectedCategory || !newTodo.trim()) return;
    await addDoc(collection(db, "todoGroups", selectedCategory, "todos"), {
      task: newTodo,
    });
    setNewTodo("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Kategori To-Do</h1>
      <div className="bg-white p-5 rounded shadow-md w-96">
        <h2 className="text-lg font-semibold mb-2">Daftar Kategori</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id} className="flex justify-between p-2 border-b">
              <button onClick={() => setSelectedCategory(cat.id)}>{cat.name}</button>
              <button
                onClick={() => deleteCategory(cat.id)}
                className="text-red-500 hover:text-red-700"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Nama kategori"
          className="border p-2 rounded w-60"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white p-2 ml-2 rounded"
        >
          Tambah
        </button>
      </div>

      {selectedCategory && (
        <div className="bg-white p-5 rounded shadow-md w-96 mt-5">
          <h2 className="text-lg font-semibold mb-2">Tugas dalam {categories.find(c => c.id === selectedCategory)?.name}</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="p-2 border-b">{todo.task}</li>
            ))}
          </ul>
          <div className="mt-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Tambahkan tugas"
              className="border p-2 rounded w-60"
            />
            <button
              onClick={addTodo}
              className="bg-green-500 text-white p-2 ml-2 rounded"
            >
              Tambah
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
