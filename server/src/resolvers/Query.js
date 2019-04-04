async function feed(parent, args, context) {
  const {filter, first, skip} = args
  const where = filter ? { OR: [{url_contains: filter}, {description_contains: filter}]} : {}
  const queriedLinks = await ctx.db.query.links({first, skip, where})

  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  return {
    linksIds: queriedLinks.map(link => link.id),
    count,
  }
}

module.exports = {
  feed,
}
