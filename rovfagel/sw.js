async function main() {
    const records = await pb.collection('posts').getFullList({
        sort: '-created',
    });
    console.log(records[0].text)
}
main()