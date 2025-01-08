import "./index.css";

import { uploads } from "../../utils/config";

// Components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// Hooks
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";
import {
	publishPhoto,
	resetMessage,
	getUserPhotos,
	deletePhoto,
} from "../../slices/photoSlice";

const Profile = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.user);
	const { user: userAuth } = useSelector((state) => state.auth);
	const {
		photos,
		loading: loadingPhoto,
		message: messagePhoto,
		error: errorPhoto,
	} = useSelector((state) => state.photo);

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");

	// New form and edit form refs
	const newPhotoForm = useRef();
	const editPhotoForm = useRef();

	// Load user data
	useEffect(() => {
		dispatch(getUserDetails(id));
		dispatch(getUserPhotos(id));
	}, [dispatch, id]);

	const handleFile = (e) => {
		const image = e.target.files[0];
		setImage(image);
	};

	const resetComponentMessage = () => {
		setTimeout(() => {
			dispatch(resetMessage());
		}, 2000);
	};

	const submitHandle = (e) => {
		e.preventDefault();

		const photoData = {
			title,
			image,
		};

		const formData = new FormData();

		const photoFormData = Object.keys(photoData).forEach((key) =>
			formData.append(key, photoData[key]),
		);

		formData.append("photo", photoFormData);

		dispatch(publishPhoto(formData));

		setTitle("");

		resetComponentMessage();
	};

	// Delete a photo
	const handleDelete = (id) => {
		dispatch(deletePhoto(id));

		resetComponentMessage();
	};

	if (loading) {
		return <p>Carregando...</p>;
	}

	return (
		<div id="profile">
			<div className="profile-header">
				{user.profileImage && (
					<img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
				)}
				<div className="profile-description">
					<h2>{user.name}</h2>
					<p>{user.bio}</p>
				</div>
			</div>

			{id === userAuth._id && (
				<>
					<div ref={newPhotoForm} className="new-photo">
						<h3>Compartilhe algum momento seu:</h3>
						<form onSubmit={submitHandle}>
							<label>
								<span>Título para a foto</span>
								<input
									type="text"
									placeholder="Insira um título"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</label>

							<label>
								<span>Imagem:</span>
								<input type="file" onChange={handleFile} />
							</label>

							{!loadingPhoto && <input type="submit" value="Postar" />}
							{loadingPhoto && (
								<input type="submit" value="Aguarde..." disabled />
							)}
						</form>
					</div>
					{errorPhoto && <Message msg={errorPhoto} type="error" />}
					{messagePhoto && <Message msg={messagePhoto} type="success" />}
				</>
			)}

			<div className="user-photos">
				<h2>Fotos publicadas:</h2>
				<div className="photos-container">
					{photos?.map((photo) => {
						return (
							<div className="photo" key={photo._id}>
								{photo?.image && (
									<div className="">
										<img
											src={`${uploads}/photos/${photo.image}`}
											alt={photo.title}
										/>
									</div>
								)}
								{id === userAuth._id ? (
									<div className="actions">
										<Link className="" to={`/photo/${photo._id}`}>
											<BsFillEyeFill />
										</Link>
										<BsPencilFill />
										<BsXLg onClick={() => handleDelete(photo._id)} />
									</div>
								) : (
									<Link className="btn " to={`/photo/${photo._id}`}>
										Ver
									</Link>
								)}
							</div>
						);
					})}
					{photos.length === 0 && <p>Ainda não fotos cadastradas</p>}
				</div>
			</div>
		</div>
	);
};

export default Profile;
