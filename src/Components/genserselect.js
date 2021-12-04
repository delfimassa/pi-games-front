
//   function handleSelectGenre(e) {
//     if (!input.genres.includes(e.target.value)) {
//       setInput({
//         ...input,
//         genres: [...input.genres, e.target.value],
//       });
//       setErrors(
//         hayErrores({
//           ...input,
//           genres: [...input.genres, e.target.value],
//         })
//       );
//     }
//     console.log(input);
//     console.log(errors);
//   }
//   function handleDeleteGenre(element) {
//     setInput({
//       ...input,
//       genres: input.genres.filter((gen) => gen !== element),
//     });
//   }




        {/* <div>
          <select
            name="genres"
            value={input.genres}
            onChange={(e) => handleSelectGenre(e)}
          >
            <option value="">Select Genres</option>
            {genres &&
              genres.map((gr) => {
                return <option value={gr.name}>{gr.name}</option>;
              })}
          </select>
          {errors.genres && <h7>*</h7>}
        </div>
        {input.genres.map(element => 
            <div>
            <p>{element}</p>    
            <button onClick={()=>handleDeleteGenre(element)}>X</button>
            </div>
            )} */}