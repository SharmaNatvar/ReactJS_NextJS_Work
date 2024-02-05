import React from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {

  const navigate = useNavigate();

  return (
    <>
     <button onClick={() => navigate("/users")}>Back</button>
      <button
      >
        Add User <span >&rarr;</span>
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-gray-800" id="exampleModalLabel">
               Add User
              </h1>
              {/* <button type="button" class=" btn-close-black text-black" data-bs-dismiss="modal" aria-label="Close"></button> */}
              
            </div>
            <div class="modal-body text-gray-800">
              <div >
                {/* <div className="border-b border-gray-900/10 pb-1"> */}
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    User Information
                  </h2>
                {/* </div> */}

                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                      >
                        Your Name
                      </label>
                      {/* <div className="mt-2"> */}
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                        //   ref={name}
                        />
                      {/* </div> */}
                    </div>

                    <div className="sm:col-span-3">
                      <label
                      >
                        Your BirthDate
                      </label>
                        <input
                          type="date"
                          name="date"
                        />
                    </div>

                    <div className="sm:col-span-4">
                      <label
                      >
                        Email address
                      </label>
                        <input
                          name="email"
                          type="email"
                        //   ref={email}
                        />
                    </div>

                    <div className="sm:col-span-3">
                      <label
                      >
                        Enter Your Phone No.
                      </label>
                        <input
                          name="number"
                          type="text"
                        />
                    </div>

                    <div className="col-span-full">
                      <label
                      >
                        Your Address
                      </label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Enter Your Address"
                        //   ref={address}
                        />
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                      >
                        Enter Your Gender
                      </label>
                        <input
                          type="text"
                          name="sex"
                        />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                      >
                        Enter Your Card No.
                      </label>
                        <input
                          type="text"
                          name="cardNumber"
                        />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                      >
                        Enter Your Role
                      </label>
                        <input
                          type="text"
                          name="role"
                        //   ref={role}
                        />
                    </div>

                   
                    <div className="col-span-full">
                      <label
                      >
                        Cover photo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          {/* <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          /> */}
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              {/* <input id="file-upload" name="file-upload" type="file" className="sr-only" 
                                                                    onChange={handle} /> */}
                              <input
                                className="mb-3"
                                type="file"
                                id="logo"
                                name="profile"
                                style={{ width: "100%" }}
                                // ref={profile}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
