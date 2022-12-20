/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
    plugins: ["jest"],
    overrides: [
        {
            files: ["**/*test.tsx"],
            env: {
                jest: true,
                node: true,
            },
        },
    ],
};
