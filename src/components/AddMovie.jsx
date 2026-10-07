import { useState } from 'react'

const emptyMovie = { title: '', description: '', posterURL: '', rating: '' }

function AddMovie({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState(emptyMovie)

  function updateField(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAdd({ ...formData, rating: Number(formData.rating) })
    setFormData(emptyMovie)
  }

  if (!isOpen) return null

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="add-dialog" role="dialog" aria-modal="true" aria-labelledby="add-title">
        <div className="dialog-heading">
          <div>
            <p className="eyebrow">MAKE IT A DOUBLE FEATURE</p>
            <h2 id="add-title">Add to your collection</h2>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close form">×</button>
        </div>
        <form className="add-form" onSubmit={handleSubmit}>
          <label>
            <span>Title</span>
            <input name="title" value={formData.title} onChange={updateField} placeholder="e.g. The Grand Budapest Hotel" required autoFocus />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" value={formData.description} onChange={updateField} placeholder="What makes it worth watching?" rows="3" required />
          </label>
          <label>
            <span>Poster image URL</span>
            <input name="posterURL" type="url" value={formData.posterURL} onChange={updateField} placeholder="https://…" required />
          </label>
          <label>
            <span>Your rating <span className="rating-hint">(0–5)</span></span>
            <input name="rating" type="number" min="0" max="5" step="0.1" value={formData.rating} onChange={updateField} placeholder="4.5" required />
          </label>
          <div className="form-actions">
            <button className="cancel-button" type="button" onClick={onClose}>Cancel</button>
            <button className="submit-button" type="submit">Add to collection <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddMovie