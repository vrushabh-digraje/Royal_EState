const PropertySearch = () => {
  return (
    <section className="search-section">
      <div className="container">
        <form className="search-form">
          <div className="form-row">
            <div className="form-group">
              <label>Keyword</label>
              <input type="text" placeholder="Keyword" />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="City/Locality Name" />
            </div>

            <div className="form-group">
              <label>Property Type</label>
              <select>
                <option>Type</option>
              </select>
            </div>

            <div className="form-group">
              <label>Property Status</label>
              <select>
                <option>Type</option>
              </select>
            </div>

            <div className="form-group">
              <label>Agents</label>
              <select>
                <option>Any</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Min Beds</label>
              <select>
                <option>1</option>
              </select>
            </div>

            <div className="form-group">
              <label>Min Bathroom</label>
              <select>
                <option>1</option>
              </select>
            </div>

            <div className="form-group">
              <label>Min Price</label>
              <select>
                <option>Min Price</option>
              </select>
            </div>

            <div className="form-group">
              <label>Min Area (sq ft)</label>
              <input type="text" placeholder="Min Area" />
            </div>

            <div className="form-group">
              <label>Max Area (sq ft)</label>
              <input type="text" placeholder="Max Area" />
            </div>

            <button className="search-submit">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PropertySearch;
