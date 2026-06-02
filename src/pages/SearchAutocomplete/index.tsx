import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import type { User } from '../../types/index';
import style from './SearchAutocomplete.module.css';

const SearchAutocomplete = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch('https://dummyjson.com/users?limit=100');
      const json = await data.json();
      setData(json.users);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSelectedUser(null);
  };

  const search = value.trim().toLowerCase();
  const filteredData = search
    ? data
        .filter(
          (item) =>
            item.firstName.toLowerCase().includes(search) ||
            item.lastName.toLowerCase().includes(search)
        )
        .slice(0, 8)
    : [];

  if (loading) {
    return (
      <div className={style.container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.form}>
        <label className={style.label} htmlFor="search-input">
          Search users
        </label>
        <div className={style.wrapper}>
          <input
            id="search-input"
            className={style.input}
            type="text"
            value={value}
            onChange={handleInputChange}
          />
          {search && filteredData.length > 0 && (
            <ul className={style.list}>
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  className={style.listItem}
                  onClick={() => {
                    setValue(`${item.firstName} ${item.lastName}`);
                    setSelectedUser(item);
                  }}
                >
                  {item.firstName} {item.lastName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p
        className={`${style.result} ${!selectedUser ? style.resultEmpty : ''}`}
      >
        Email: <span className={style.emailText}>{selectedUser?.email}</span>
      </p>
    </div>
  );
};

export default SearchAutocomplete;
