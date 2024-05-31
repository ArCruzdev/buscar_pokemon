export function Posts() {
    const $Posts = document.createElement('section')
    $Posts.id = 'posts'

    if (!location.hash.includes('#/search')) {
        $Posts.classList.add('grid-fluid')
    }

    return $Posts
}