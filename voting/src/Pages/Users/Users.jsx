import React from "react";
import "../Users/user.css";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";

const Users = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <form>
          <div className="form_bg">
            <button onClick={() => navigate("/home")}>Back</button>
            <div className="form_sear">
              <svg
                className=""
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                type="search"
                id="default-search"
                placeholder="Search User..."
                required=""
              />
              <button type="submit">Search</button>
            </div>
            <button onClick={() => navigate("/addusers")}>Add User</button>
          </div>
        </form>

        {/* card */}
        <div className="card_bg">
          <div className="">
            <div className="card_Padmin">
              {/* <time className="">9978543917</time> */}
              <p className="">admin</p>
            </div>
            <div className="cardProfile">
              <img src={profile} alt="image" className="" />
              <div className="">
                <p className="">krishna</p>
                <p className="">male</p>
              </div>
            </div>
            <div className="">
              <h3 className="">9978542917</h3>
              <p className="">sdfgio dfghjkl dfghjkl dfghj</p>
            </div>
            <div className="pt-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* table for user data */}

        {/* <table >
                <thead >
                  <tr>
                    <th scope="col" className="px-2 py-1">
                      User Email
                    </th>
                    <th scope="col" className="px-2 py-1">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>

                      <tr >
                        <td className="px-2 py-1"></td>
                        <td className="p-4">
                          <button >
                            More...
                          </button>
                        </td>
                      </tr>
                </tbody>
              </table> */}

        {/* <table> */}
        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-1">
                      User Profile
                    </th>
                    <th scope="col" className="px-2 py-1">
                      Email
                    </th>
                    <th scope="col" className="px-2 py-1">
                      View
                    </th>
                  </tr>
                </thead> */}
        {/* <tbody>

                      <tr>
                        <td >
                          <img  alt="profile-img" />
                        </td>
                        <td className="px-2 py-1">d</td>
                        <td className="px-2 py-1">
                          <button >
                            More...
                          </button>
                        </td>
                      </tr>
                </tbody> */}
        {/* </table> */}

        {/* <table > */}
        {/* <thead >
                  <tr>
                    <th >
                      User Profile
                    </th>
                    <th >
                      Name
                    </th>
                    <th >
                      Email
                    </th>
                    <th >
                      View
                    </th>
                    <th >
                      Delete
                    </th>
                  </tr>
                </thead> */}
        {/* <tbody>
                
                      <tr >
                        <td >
                          <img  alt="profile-img" />
                        </td>
                        <td className="px-4 py-3">f</td>
                        <td className="px-4 py-3">f</td>
                        <td className="px-4 py-3">
                          <button>
                            More...
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <button >
                            Delete
                          </button>
                        </td>
                      </tr>
                </tbody> */}

        {/* <table > */}
        {/* <thead >
                  <tr>
                    <th scope="col" >
                      User Profile
                    </th>
                    <th scope="col" >
                      Name
                    </th>
                    <th scope="col" >
                      Phone
                    </th>
                    <th scope="col" >
                      Email
                    </th>
                    <th scope="col" >
                      View
                    </th>
                    <th scope="col" >
                      Delete
                    </th>
                  </tr>
                </thead> */}
        {/* <tbody>
                 
                      <tr >
                        <td >
                          <img  alt="profile-img"  />
                        </td>
                        <td className="px-4 py-3">f</td>
                        <td className="px-4 py-3">f</td>
                        <td className="px-4 py-3">f</td>
                        <td className="px-4 py-3">
                          <button >
                            More...
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <button >
                            Delete
                          </button>
                        </td>
                      </tr>
                </tbody> */}
        {/* </table> */}

        {/* <table > */}
        {/* <thead >
                  <tr>
                    <th scope="col" >
                      User Profile
                    </th>
                    <th scope="col" >
                      Name
                    </th>
                    <th scope="col" >
                      Sex
                    </th>
                    <th scope="col" >
                      DOB
                    </th>
                    <th scope="col" >
                      Phone
                    </th>
                    <th scope="col" >
                      Email
                    </th>
                    <th scope="col" >
                      Address
                    </th>
                    <th scope="col" >
                      View
                    </th>
                    <th scope="col" >
                      Delete
                    </th>
                  </tr>
                </thead> */}
        {/* <tbody>
                 
                      <tr >
                        <td >
                          <img  alt="profile-img" />
                        </td>
                        <td >s</td>
                        <td >f</td>
                        <td >sf</td>
                        <td >sf</td>
                        <td >sf</td>
                        <td >sf</td>
                        <td >
                          <button >
                            More...
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <button >
                            Delete
                          </button>
                        </td>
                      </tr>
                </tbody> */}
        {/* </table> */}

        {/* <div>
                  <h5 className="font-bold text-[18px] mb-[10px]" >Update Details</h5>
                </div> */}
        {/* <div className="image flex justify-center">
                  <img alt="profile-img" className=" rounded-full my-2 w-[80px]" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId'>Profile Image Link</label>
                  <br />
                  <input type="text" name="Profile" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId'>Name</label>
                  <br />
                  <input type="text"  name="Name" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId'>Sex</label>
                  <br />
                  <input type="text" name="Sex" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId'>DOB</label>
                  <br />
                  <input type="text" name="DOB" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId'>Phone</label>
                  <br />
                  <input type="text"  name="Phone" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId'>Email</label>
                  <br />
                  <input type="text"  name="Email" />
                </div> */}
        {/* <div>
                  <label htmlFor='voterId' className="font-semibold mb-[10px] ml-2">Address</label>
                  <br />
                  <input type="text"  name="Address" />
                </div> */}
        {/* <div className="flex justify-center mt-3">
                  <button>Update</button>
                </div> */}
      </div>
    </>
  );
};

export default Users;
