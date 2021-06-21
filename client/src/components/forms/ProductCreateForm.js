import React from 'react';

const ProductCreateForm=({ handleSubmit, handleChange, values, handleCategoryChange, subOptions, showSub,   setValues})=>{
    const {
        title,
        description,
        price,
        categories,
        category,
        subs,
        engine,
        images,
        colors,
        mileage,
        carfax,
        year,
        fuel,
        color,
      } = values;
    return(
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Color</label>
          <select
            name="color"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">Please select</option>
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
            <label>Parent category</label>
            <select
              name="category"
              className="form-control"
              onChange={handleCategoryChange}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          {showSub && (
        <div className="form-group">
          <label>Sub Categories</label>
          <select
          name="subs"
          className="form-control"
          onChange={handleChange}
          >
            <option>Please Select</option>
            {subOptions.length &&
              subOptions.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
          </select>
        </div>
      )}

        <div className="form-group">
          <label>Year</label>
          <input
            type="number"
            name="year"
            className="form-control"
            value={year}
            onChange={handleChange}
          />
        </div>
         <div className="form-group">
          <label>Engine</label>
          <input
            type="text"
            name="engine"
            className="form-control"
            value={engine}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Fuel</label>
          <input
            type="text"
            name="fuel"
            className="form-control"
            value={fuel}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Sold Or In Stock</label>
          <select
            name="sold"
            className="form-control"
            onChange={handleChange}
          >
            <option>Please select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mileage</label>
          <input
            type="text"
            name="mileage"
            className="form-control"
            value={mileage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Condition</label>
          <select
            name="condition"
            className="form-control"
            onChange={handleChange}
          >
            <option>Please select</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <div className="form-group">
          <label>Carfax URL</label>
          <input
            type="text"
            name="carfax"
            className="form-control"
            value={carfax}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-info">Save</button>
      </form>
    
    )
}

export default ProductCreateForm;