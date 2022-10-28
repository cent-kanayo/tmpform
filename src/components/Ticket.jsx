import React from "react";

const Ticket = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center mb-12">Ticket</h1>
      <p className="text-center mb-20">Create new ticket</p>
      <div className="flex flex-col">
        <form
          className="flex flex-col"
          style={{ color: "#393939", fontSize: "24px" }}
        >
          <div className="flex flex-col gap-4 mb-12">
            <label htmlFor="">Date</label>
            <input type="text" className="bdGray outline-none px-8 py-2" />
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <label htmlFor="">Location</label>
            <input type="text" className="bdGray outline-none px-8 py-2" />
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <label htmlFor="">Issue</label>
            <input type="text" className="bdGray outline-none px-8 py-2" />
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <label htmlFor="">Solution</label>
            <input type="text" className="bdGray outline-none px-8 py-2" />
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <label htmlFor="">Upload Image</label>
            <input
              type="file"
              className="bdGray outline-none px-8 py-20 text-center"
            />
          </div>
          <div className="flex flex-col gap-4 mb-12">
            <label htmlFor="">Tag</label>
            <input type="text" className="bdGray outline-none px-8 py-2" />
          </div>
          <button className="btn place-self-center px-12 py-2 mb-4">
            Submit
          </button>
        </form>
      </div>
      <p className="text-center">You can delete or close ticket</p>
    </section>
  );
};

export default Ticket;
