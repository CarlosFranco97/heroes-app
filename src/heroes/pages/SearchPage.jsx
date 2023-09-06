import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers/getHeroesByName";
export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  
  const {q = ''} = queryString.parse( location.search );

  const heroes = getHeroesByName( q );

  const showSearch = (q.length === 0);

  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange} = useForm({
    searchText: q
   })  
   
   const handleSearchSubmit = (event) => {
    event.preventDefault();
    //Lo comento porque al momento de presionar enter se muestre el mensaje condicional de search a hero
    //  if(searchText.trim().length <= 1) return
     
     navigate(`?q=${searchText}`.toLowerCase().trim())
    }
  
   return (
    <>
    <h1>Search</h1>
    <hr />
    <div className="row">

        <div className="col-5">
        Searching
        <hr />
        <form onSubmit={handleSearchSubmit}>
          <input 
          type="text" 
          placeholder="Search a Hero"
          className="form-control"
          name="searchText"
          value={searchText}
          autoComplete="off"
          onChange={onInputChange}
          />
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>
        </form>
        </div>

        <div className="col-7">
        <h4>Results</h4>
        <hr />

        <div className="alert alert-primary animate__animated animate__fadeIn" 
          style={{display: showSearch ? '' : 'none'}}>
          Search a hero
        </div> 

        <div className="alert alert-danger animate__animated animate__fadeIn" 
          style={{display: showError ? '' : 'none' }}>
         No hero with <b>{q}</b>
        </div>

        {
          heroes.map( hero =>
            <HeroCard key={hero.id} {...hero}/> 
            )
        }
        </div>

    </div>
    </>

  )
}
