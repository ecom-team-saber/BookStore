
export default function Login() {
  return (
    <>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
        </div>
        {/* Submit button */}
        <button type="button" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <a href="/signUp">Register</a>
          </p>
        </div>
      </form>
    </>
  );
}
