import React from 'react'

const Curds = () => {
    return (
        <>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </>
    )
}

export default Curds