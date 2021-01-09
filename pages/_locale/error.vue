<router>
{
  path: '/:locale(en|fr)/*'
}
</router>

<script>
export default {
  middleware ({ error }) {
    return error({
      statusCode: 404,
      message: 'This page could not be found!'
    })
  }
}
</script>
