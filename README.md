# Work in progress

## Example query

```typescript
const exampleScanQuery = NativeQueryBuilder.scan<IDataRow>()
  .dataSource('users')
  .intervals(['0000/3000'])
  .columns(['__time', 'id'])
  .filter({
    type: 'and',
    fields: [
      {
        type: 'regex',
        dimension: 'emailAddress',
        pattern: '.*@gmail.com'
      }
    ]
  })
  .limit(25)
  .build();

const client = new DruidClient({
  url: 'http://localhost:8082'
});

const result = await client.queryApi.sendNativeQuery(exampleScanQuery);

console.log(result);
```
