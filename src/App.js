import { useEffect, useState } from 'react';
import { getItems } from './api/api';
import Menu from './menu/Menu';
import styles from './App.module.css';

const App = () => {
	const [currentItem, setCurrentItem] = useState("");
	const [allItems, setAllItems] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("");
	const [categories, setCategories] = useState([]);
	const [categoryItems, setCategoryItems] = useState([]);
	const [fetchInitialData, setFetchInitialData] = useState(false);

	const filterItems = (items, category) => {
		const filteredItems = [];
		for (const item of items) {
			if (item.category === category) filteredItems.push(item.name);
		}
		return filteredItems;
	}

	useEffect(() => {
		if (fetchInitialData) return;
		getItems().then((data) => {
			setAllItems(data);
			const categories = [...data.reduce((accu, item) => {
				return accu.add(item.category);
			}, new Set())];
			setCategories(categories);
			setCurrentCategory(categories[0]);
			const categoryItems = filterItems(data, categories[0]);
			setCategoryItems(categoryItems);
			handleClickItem(categoryItems[0]);
			setFetchInitialData(true);
		})
	});

	const handleClickCategory = (category) => {
		setCurrentCategory(category);
		const categoryItems = filterItems(allItems, category);
		setCategoryItems(categoryItems);
		setCurrentItem(categoryItems[0]);
	}

	const handleClickItem = (item) => {
		setCurrentItem(item);
	}


	return (
		<div className={styles.app}>
			<div className={styles.title}>{currentItem}</div>
			<div className={styles.menus}>
				<Menu
					menuName="category"
					options={categories}
					handleClick={handleClickCategory}
					selectedOption={currentCategory} />
				<Menu
					menuName="item"
					options={categoryItems}
					handleClick={handleClickItem}
					selectedOption={currentItem} />
			</div>
		</div>
	)
}

export default App;
