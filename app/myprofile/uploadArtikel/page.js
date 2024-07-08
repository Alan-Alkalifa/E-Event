import React from 'react';

const UploadArtikel = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Successfully uploaded');
    window.location.reload(); // Redirects to the same page
  };

  return (
    <div style={{ backgroundColor: '#1E3A8A', padding: '20px', borderRadius: '8px', color: '#FBBF24' }}>
      <h2 style={{ color: '#FBBF24' }}>Upload Artikel</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#FBBF24' }}>Title:</label>
          <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #FBBF24', backgroundColor: '#1E3A8A', color: '#FBBF24' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#FBBF24' }}>Deskripsi:</label>
          <textarea style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #FBBF24', backgroundColor: '#1E3A8A', color: '#FBBF24' }}></textarea>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#FBBF24' }}>Post Image:</label>
          <input type="file" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #FBBF24', backgroundColor: '#1E3A8A', color: '#FBBF24' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#FBBF24', color: '#1E3A8A', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>Submit</button>
      </form>
    </div>
  );
};

export default UploadArtikel;