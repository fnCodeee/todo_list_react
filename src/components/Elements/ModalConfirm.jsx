import React from "react";

export const ModalConfirm = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 top-0 left-0 w-screen backdrop-brightness-50 h-screen inset-0 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Konfirmasi</h2>
        <p>Apakah kamu yakin ingin menghapus task ini?</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">Batal</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
        </div>
      </div>
    </div>
  );
};

