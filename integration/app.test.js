describe('addItemForm', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolists-additemform--add-items-form-example');
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});



// describe('editable-span', () => {
//     it('base example, visually looks correct2', async () => {
//         // APIs from jest-puppeteer
//         await page.goto('http://localhost:9009//iframe.html?id=todolists-editablespan--editable-span-example');
//         const image = await page.screenshot();
//
//         // API from jest-image-snapshot
//         expect(image).toMatchImageSnapshot();
//     });
// });
