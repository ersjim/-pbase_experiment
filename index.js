import PocketBase from 'pocketbase';

(async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    // fetch a paginated records list
    const resultList = await pb.collection('posts').getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00"',
    });

    // you can also fetch all records at once via getFullList
    const records = await pb.collection('posts').getFullList({
        sort: '-created',
    });
    console.log(records);

    //// or fetch only the first record that matches the specified filter
    //const record = await pb.collection('posts').getFirstListItem('name="hello world"', {
    //    expand: 'name,content',
    //});
})();
