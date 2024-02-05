import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddElection = () => {
    const navigate = useNavigate();

    return (
      <>
       <button onClick={() => navigate("/election")}>Back</button>



            {/* <!-- Modal --> */}
            <div >
                <div >
                    <div >
                        <div>
                        <h1>AddElection</h1> 
                        </div>
                        <div class="modal-body text-gray-800">
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-1">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Election Information</h2>
                                </div>

                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Election Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="pname"
                                                    placeholder='Enter Party Name'
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Registration Date
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    name="registrationDate"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900 " data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                >
                                    Addd
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default AddElection
