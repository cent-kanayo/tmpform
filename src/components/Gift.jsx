import { useState } from "react";

const select = [
  "e.g birthday, engagement e.t.c",
  "Birthdays",
  "Engagements",
  "Weddings",
  "Anniversaries",
  "Births",
  "Graduations",
  "Bar & Bar Mitzvahs",
  "Retirement",
  "Christmas",
  "Easter",
  "Valentines",
  "Mothers Day",
  "Fathers Day",
  "Halloween",
  "Love",
  "Party",
  "Thanksgiving",
];

const Gift = () => {
  const [options, setOptions] = useState(select);
  const [customSelect, setCustomSelect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customSelect) {
      setOptions([customSelect, ...options]);
    }
    setCustomSelect("");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center mb-12">GIFT TREE</h1>
      <p className="text-center mb-6">
        Tree can be for employee engagement, unique reward, loyalty program, to
        celebrate special occasions <br /> ( Birthday, weddings, anniversary
        e.t.c.)
      </p>
      <p className="text-center mb-20">
        Tree certificate and e- card will be sent to recipient.
      </p>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4"></div>
        <div className="flex-1">
          <form className="form flex flex-col mb-12" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-12 md:flex-row">
              <p
                className="w-1/5"
                style={{ color: "#393939", fontSize: "24px" }}
              >
                To
              </p>
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Type recipient's name"
                    className="bdGray outline-none px-4 py-4"
                  />

                  <input
                    type="text"
                    placeholder="Type recipient's email address"
                    className="bdGray outline-none px-4 py-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-20 md:flex-row">
              <p
                className="w-1/5"
                style={{ color: "#393939", fontSize: "24px" }}
              >
                From
              </p>
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Type your name/ organization"
                    className="bdGray outline-none px-4 py-4"
                  />

                  <input
                    type="text"
                    placeholder="Email address"
                    className="bdGray outline-none px-4 py-4"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-20 md:flex-row">
              <p
                className="w-1/5"
                style={{ color: "#393939", fontSize: "24px" }}
              >
                Purpose
              </p>
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <select
                    name=""
                    id=""
                    className="bdGray outline-none px-4 py-4 bg-white"
                  >
                    {options.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="text"
                    value={customSelect}
                    placeholder="Didn't find a purpose? input one here"
                    className="bdGray outline-none px-4 py-4"
                    onChange={(e) => setCustomSelect(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-20 md:flex-row">
              <p
                className="w-1/5"
                style={{ color: "#393939", fontSize: "24px" }}
              >
                Note
              </p>
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="e.g Happy Birthday. max 30 characters"
                    className="bdGray outline-none px-4 py-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-20 md:flex-row">
              <p
                className="w-1/5"
                style={{ color: "#393939", fontSize: "24px" }}
              >
                Date
              </p>
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <input
                    type="date"
                    placeholder="Select date of delivery"
                    className="bdGray outline-none px-4 py-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-20 md:flex-row">
              <p className="w-1/5"></p>
              <button className="btn px-12 py-2 place-self-center">
                Send Tree
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center mb-12">
        Don't have a tree? Click on{" "}
        <span style={{ color: "#008000" }}>Plant Tree</span>
      </p>
    </div>
  );
};

export default Gift;
