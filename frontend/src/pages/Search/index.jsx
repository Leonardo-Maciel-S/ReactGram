import "./index.css";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
import { useQuery } from "../../hooks/useQuery";

// Components
import LikeContainer from "../../components/LikeContainer/LikeContainer";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import { Link } from "react-router-dom";

// Redux
import { searchPhotos, like } from "../../slices/photoSlice";

const Search = () => {
	const query = useQuery();
	const search = query.get("q");

	const dispatch = useDispatch();

	const resetMessage = useResetComponentMessage(dispatch);

	const { user } = useSelector((state) => state.auth);
	const { photos, loading } = useSelector((state) => state.photo);

	// Load Photos
	useEffect(() => {
		dispatch(searchPhotos(search));
	}, [dispatch, search]);

	// like a photo
	const handleLike = (photo) => {
		dispatch(like(photo._id));
		resetMessage();
	};

	console.log(photos);

	if (loading) {
		return <p>Carregando</p>;
	}

	return (
		<div id="search">
			<h2>Você esta buscando por: {search}</h2>

			{photos.map((photo) => (
				<div key={photo._id}>
					<PhotoItem photo={photo} />
					<LikeContainer photo={photo} user={user} handleLike={handleLike} />
					<Link className="btn" to={`/photos/${photo._id}`}>
						Ver mais
					</Link>
				</div>
			))}

			{photos?.length === 0 && (
				<h2>
					Não foram encontrado resultados para sua busca
					<Link to={`/users/${user._id}`}>Clique aqui.</Link>
				</h2>
			)}
		</div>
	);
};

export default Search;
