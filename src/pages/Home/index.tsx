import { Fragment, useEffect, useState } from 'react';
import style from './Home.module.css';
import type { User } from '../../types/index';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

const Home = () => {
  const USER_PER_PAGE = 12;
  const [data, setData] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://dummyjson.com/users?limit=100');
      const json = await data.json();
      setData(json.users);
    };
    fetchData();
  }, []);

  const handleViewProfile = (id: number | null) => {
    setSelectedUserId((prev) => (prev == id ? null : id));
  };

  const start = startIndex * USER_PER_PAGE;
  const filteredData = data.slice(start, start + USER_PER_PAGE);
  const selectedUser = filteredData.find((user) => user.id === selectedUserId);
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        {filteredData.map((item) => (
          <Fragment key={item.id}>
            <Card user={item} handleViewProfile={handleViewProfile} />
          </Fragment>
        ))}
      </div>
      {selectedUser && (
        <Modal
          user={selectedUser}
          handleModalClose={() => setSelectedUserId(null)}
        />
      )}
      <footer className={style.paginationFooter}>
        <Pagination
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          data={data}
          userPerPage={USER_PER_PAGE}
        />
      </footer>
    </div>
  );
};

export default Home;
