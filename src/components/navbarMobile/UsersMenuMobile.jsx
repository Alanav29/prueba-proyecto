import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../features/userFeature";

const UsersMenuMobile = ({ setSecondaryMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSession = () => {
    dispatch(setUser({ isAdmin: false }));
    navigate("/");
    setSecondaryMenu("d-none");
    localStorage.removeItem("user");
  };
  return (
    <>
      <Link
        className=""
        to="/galleryAdmin"
        onClick={() => setSecondaryMenu("d-none")}
      >
        MI PERFIL
      </Link>
      <div className="text-danger" onClick={closeSession}>
        CERRAR SESION
      </div>
    </>
  );
};

export default UsersMenuMobile;
