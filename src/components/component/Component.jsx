import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../useFetch/useFetch';
import './Component.css';

function Component({ url }) {
   const [data, isLoading, error] = useFetch(url);

   return (
      <div className="example">
         {isLoading && (
            <div className="loading">Индикатор загрузки: Загрузка... </div>
         )}
         {error && <div className="error">Получение ошибки:{error} </div>}
         {data && (
            <ul className="data">Успешное получение данных: {data.status}</ul>
         )}
      </div>
   );
}

Component.propTypes = {
   url: PropTypes.string.isRequired,
};
export default Component;
