import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import Pagination from "./commen/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./commen/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./movieTable";
import _ from "lodash";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((c) => c._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  getPagedData = ()=>{
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;
    const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const movies = paginate(sorted, currentPage, pageSize);
  return { totalCount: filtered.length, data: movies }
  }
  render() {
    // const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;
    
   const {totalCount, data} = this.getPagedData()
    return (
      <div className="  ">
        <div className="row">
          <div className="col-md-3">
            <ListGroup
              items={this.state.genres}
              selectedGenre={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-md-9">
            <Link className='btn btn-primary mb-3' to='/movies/new'>New Movie</Link>
            <p>There are {totalCount} movies in database</p>
            <MoviesTable
              movies={data}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={totalCount}
              PageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}
