import React from 'react';
import './App.css';
import { useAllRepositoryItemsQuery } from "./services/repoApi";
import Repositories from "./components/Repositories";
import {useAllProjectItemsQuery} from "./services/projectApi";

function App() {
    const { data, error, isLoading, isSuccess} = useAllProjectItemsQuery();
    
  return (
    <div className="App">
        <div className='isErrorIsLoading'>
            {error && <p>An error occured</p>}
            {isLoading && <p>Loading...</p>}
        </div>
        {isSuccess && (
            <>
                {data.map((repository) => (
                    <Repositories Name={repository.Description ?? ""} Id={repository.Id}/>
                ))}
            </>
        )}
    </div>
  );
}

export default App;
